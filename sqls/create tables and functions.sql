DROP TABLE  IF EXISTS public.companyroles_consent;
DROP TABLE IF EXISTS public.companyroles_signed_consent;

DROP TABLE IF EXISTS public.companyroles;
CREATE TABLE public.companyroles (
    id  SERIAL  PRIMARY KEY,
    title varchar(40) NOT NULL
);

DROP TABLE IF EXISTS public.consent;
CREATE TABLE public.consent (
    id  SERIAL  PRIMARY KEY,
    title varchar(40) NOT NULL,
    link varchar(250) NOT NULL
);

CREATE TABLE public.companyroles_consent (
  role_id int references public.companyroles(id),
  consent_id  int references public.consent(id),
  primary key (role_id, consent_id)
);

CREATE TABLE public.companyroles_signed_consent(
company_id varchar(100),
    role_id int references public.companyroles(id),
  consent_id  int references public.consent(id),
  signature_date TIMESTAMP,
  signatory varchar(40),
  primary key (company_id, role_id, consent_id)
);

DROP FUNCTION IF EXISTS public.get_company_role();
CREATE FUNCTION public.get_company_role() RETURNS TABLE(role_id int,role_title varchar(40), consent_id int, consent_title varchar(40), link varchar(100))
AS $$
SELECT cr.id as role_id, cr.title as role_title, c.id as consent_id, c.title as consent_title, c.link
FROM   companyroles_consent cc
JOIN  companyroles cr ON cc.role_id = cr.id
JOIN consent c on c.id = cc.consent_id
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.get_company_role(int);
CREATE FUNCTION public.get_company_role(int) RETURNS TABLE(role_id int,role_title varchar(40), consent_id int, consent_title varchar(40), link varchar(100))
AS $$
SELECT cr.id as role_id, cr.title as role_title, c.id as consent_id, c.title as consent_title, c.link
FROM   companyroles_consent cc
JOIN  companyroles cr ON cc.role_id = cr.id
JOIN consent c on c.id = cc.consent_id
   where cr.id = $1
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.get_consents(int[]);
CREATE FUNCTION public.get_consents(int[]) RETURNS TABLE(id int, title varchar(40), link varchar(250) )
AS $$
SELECT * from public.consent WHERE id = ANY($1)
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.sign_consent(varchar(100), int, int, varchar(40));
CREATE FUNCTION public.sign_consent(varchar(100), int, int, varchar(40) ) RETURNS void
AS $$
insert into public.companyroles_signed_consent(company_id, role_id, consent_id, signature_date, signatory )
VALUES($1,$2,$3,(now() at time zone 'utc'), $4);
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.get_signed_consents_for_company_id(varchar(100));
CREATE FUNCTION public.get_signed_consents_for_company_id(varchar(100)) RETURNS TABLE(company_id varchar(100), role_id int , consent_id int, signature_date TIMESTAMP,
  signatory varchar(40) )
AS $$
SELECT * from public.companyroles_signed_consent WHERE company_id = $1
$$
LANGUAGE SQL;
