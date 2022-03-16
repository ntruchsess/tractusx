<#macro htmlEmailLayout>
<html>
  <head>
  </head>
    <body text="#000000" bgcolor="#FFFFFF">
    <#if realmName??>
    <table width="100%" bgcolor="#FFFFFF" cellspacing="0" cellpadding="15"><tr><td>
    <font style="font-size:24px;" size="5" color="#000000"><b>
      <#nested "Welcome">
      </b></font>
      <p></p>
      <table width="100%" bgcolor="#2074d4" cellspacing="0" cellpadding="2"><tr><td>
      <font style="font-size:1px;" size="1" color="#000000"><b>
      <p></p>
    </b></font>
    </td></tr></table>

<font style="font-size:12px;" size="5" color="#000000"><b>
<#nested "text">
</b></font>

<p></p>

<p></p>

<#if link??>
<table class="button" bgcolor="#2074d4" cellspacing="2" cellpadding="10"><tr><td>
<a href="${link}"><font style="font-size:19px;" size="4" color="#FFFFFF"><#nested "linkText"></font></a>
</td></tr></table>
</#if>

</body>
</html>
</#macro>
