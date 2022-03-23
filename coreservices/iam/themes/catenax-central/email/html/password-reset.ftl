<#import "template.ftl" as layout>
<@layout.htmlEmailLayout ; section>
    <#if section = "Welcome">
        ${msg("passwordResetSubject")?no_esc}
    </#if>
    <#if section = "text">
        ${msg("passwordResetBodyHtml",link, linkExpiration, realmName,user.username)?no_esc}
    </#if>
    <#if section = "linkText">
        ${msg("passwordResetLinkTextHtml")?no_esc}
    </#if>
    <#if section = "info">
        ${msg("passwordResetinfo")?no_esc}
    </#if>
</@layout.htmlEmailLayout>
