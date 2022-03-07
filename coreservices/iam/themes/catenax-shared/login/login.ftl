<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">

<pre id="providers">
[
<#if realm.password && social.providers??>
    <#list social.providers as p>
    {
        "name": "${p.displayName}",
        "alias": "${p.alias}",
        "provider": "${p.providerId}",
        "url": "${p.loginUrl}"
    },
    </#list>
</#if>
null]
</pre>

    </#if>
</@layout.registrationLayout>
