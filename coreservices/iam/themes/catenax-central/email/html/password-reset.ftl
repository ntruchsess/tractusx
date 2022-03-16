<html>
    <head>
        <title>${kcSanitize(msg("passwordResetSubject"))?no_esc}</title>
    </head>
    <body bgcolor="#dba316">
    ${kcSanitize(msg("passwordResetBodyHtml","passwordResetLinkTextHtml", linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
    </body>
</html>
