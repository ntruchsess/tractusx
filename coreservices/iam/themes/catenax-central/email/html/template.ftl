<#macro htmlEmailLayout>
<html>
  <head>
  </head>
    <body text="#000000" bgcolor="#FFFFFF">
    <table width="100%" bgcolor="#FFA600" cellspacing="10" cellpadding="0"><tr><td>
    <font style="font-size:24px;" size="5" color="#000000"><b>
      </b></font></table>

    <table width="100%" bgcolor="#FFFFFF" cellspacing="10" cellpadding="10"><tr><td>
    <font style="font-size:24px;" size="5" color="#000000"><b>
      <#nested "Welcome">
      </b></font>
      </table>

      <br />
      
    <table width="100%" bgcolor="#FFA600" cellspacing="10" cellpadding="15"><tr><td>
    <font style="font-size:1px;" size="1" color="#000000"><b>
    </b></font>  
      <br />
    </td></tr></table>

<br />
<br />

  <font style="font-size:20px;" size="5" color="#000000">
  <#nested "text">
  </font>

<br />
<br />

<#if link??>
<table class="button" bgcolor="#FFA600" cellspacing="15" cellpadding="10"><tr><td>
<a href="${link}"><font style="font-size:19px;" size="4" color="#FFFFFF"><#nested "linkText"></font></a>
</td></tr></table>

<table width="100%" bgcolor="#F0EDEA" cellspacing="10" cellpadding="10"><tr><td>
    <font style="font-size:24px;" size="5" color="#000000"><b>
      <#nested "Info">
      </b></font>
      </table>

      <br />


</#if>

</body>
</html>
</#macro>
