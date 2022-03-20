<#import "template.ftl" as layout>
<@layout.htmlEmailLayout ; section>
    <#if section = "Welcome">
        ${msg("emailVerificationSubject")?no_esc}
    </#if>
    <#if section = "text">
        ${msg("emailVerificationBodyCodeHtml",code))?no_esc}
    </#if>
    <#if section = "linkText">
        ${msg("emailVerificationLinkTextHtml")?no_esc}
    </#if>
</@layout.htmlEmailLayout>
