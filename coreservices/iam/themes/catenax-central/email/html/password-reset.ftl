<#import "template.ftl" as layout>
<@layout.htmlEmailLayout ; section>
    <#if section = "Welcome">
        ${msg("passwordResetSubject")?no_esc}
    </#if>
    <#if section = "text">
        ${msg("passwordResetBodyHtml", linkExpiration, realmName)?no_esc}
    </#if>
    <#if section = "linkText">
        ${msg("passwordResetLinkTextHtml")?no_esc}
    </#if>
</@layout.htmlEmailLayout>
