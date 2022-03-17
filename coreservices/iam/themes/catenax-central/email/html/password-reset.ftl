<#import "template.ftl" as layout>
<@layout.htmlEmailLayout ; section>
    <#if section = "text">
        ${kcSanitize(msg("passwordResetBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
    </#if>
    <#if section = "linkText">
        ${msg("passwordResetLinkTextHtml")?no_esc}
    </#if>
</@layout.htmlEmailLayout>
