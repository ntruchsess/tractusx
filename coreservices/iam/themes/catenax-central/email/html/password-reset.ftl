<html>
    <head>
        <title>${kcSanitize(msg("passwordResetSubject"))?no_esc}</title>
    </head>
    <body text="#000000" bgcolor="#dba316">
    <title>${kcSanitize(msg("passwordResetSubject"))?no_esc}</title>
    <title>"Test"</title>
    ${kcSanitize(msg("passwordResetBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
    </body>
</html>
