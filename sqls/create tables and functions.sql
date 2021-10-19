DROP TABLE  IF EXISTS public.companyroles_consens;
DROP TABLE IF EXISTS public.companyroles_signed_consens;

DROP TABLE IF EXISTS public.company_selected_roles;

DROP TABLE IF EXISTS public.companyroles;
CREATE TABLE public.companyroles (
    id  SERIAL  PRIMARY KEY,
    title varchar(40) NOT NULL
);

DROP TABLE IF EXISTS public.consens;
CREATE TABLE public.consens (
    id  SERIAL  PRIMARY KEY,
    title varchar(40) NOT NULL,
    link varchar(250) NOT NULL
);

CREATE TABLE public.company_selected_roles (
    id  SERIAL  PRIMARY KEY,
    company_id varchar(100) NOT NULL,
    role_id int references public.companyroles(id)
);

CREATE TABLE public.company_selected_idp (
    id  SERIAL  PRIMARY KEY,
    company_id varchar(100) NOT NULL,
    idp VARCHAR(100) NOT NULL
);


CREATE TABLE public.companyroles_consens (
  role_id int references public.companyroles(id),
  consens_id  int references public.consens(id),
  primary key (role_id, consens_id)
);

CREATE TABLE public.companyroles_signed_consens(
company_id varchar(100),
    role_id int references public.companyroles(id),
  consens_id  int references public.consens(id),
  primary key (company_id, role_id, consens_id)
);

DROP FUNCTION IF EXISTS public.get_company_role();
CREATE FUNCTION public.get_company_role() RETURNS TABLE(id int,companyrole_title varchar(40), consens_array int[])
AS $$
SELECT i.id, i.title AS companyrole_title, t.consens_array
FROM   companyroles      i
JOIN  (
      SELECT cc.role_id AS id, array_agg(t.id) AS consens_array
   FROM   companyroles_consens cc
   JOIN   public.consens       t  ON t.id = cc.consens_id
  GROUP  BY cc.role_id
   ) t USING (id);
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.get_company_role(int);
CREATE FUNCTION public.get_company_role(int) RETURNS TABLE(id int,companyrole_title varchar(40), consens_array int[])
AS $$
SELECT i.id, i.title AS companyrole_title, t.consens_array
FROM   companyroles      i
JOIN  (
      SELECT cc.role_id AS id, array_agg(t.id) AS consens_array
   FROM   companyroles_consens cc
   JOIN   public.consens       t  ON t.id = cc.consens_id
  GROUP  BY cc.role_id
   ) t USING (id)
   where i.id = $1
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.get_consenses(int[]);
CREATE FUNCTION public.get_consenses(int[]) RETURNS TABLE(id int, title varchar(40), link varchar(250) )
AS $$
SELECT * from public.consens WHERE id = ANY($1)
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.sign_consens(varchar(100), int, int);
CREATE FUNCTION public.sign_consens(varchar(100), int, int) RETURNS void
AS $$
insert into public.companyroles_signed_consens(company_id, role_id, consens_id)
VALUES($1,$2,$3);
$$
LANGUAGE SQL;

DROP FUNCTION IF EXISTS public.get_signed_consenses_for_company_id(varchar(100));
CREATE FUNCTION public.get_signed_consenses_for_company_id(varchar(100)) RETURNS TABLE(company_id varchar(100), role_id int , consens_id int )
AS $$
SELECT * from public.companyroles_signed_consens WHERE company_id = $1
$$
LANGUAGE SQL;