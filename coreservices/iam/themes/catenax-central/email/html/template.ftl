<#macro htmlEmailLayout>
<html>
  <head>
  </head>
    <body text="#000000" bgcolor="#FFFFFF">
    
    <table width="100%" bgcolor="#FFFFFF" cellspacing="0" cellpadding="15"><tr><td>
    <font style="font-size:24px;" size="5" color="#000000"><b>
      <#nested "Welcome">
      </b></font>
      <</br>
      <table width="100%" bgcolor="#2074d4" cellspacing="0" cellpadding="2"><tr><td>
      <font style="font-size:1px;" size="1" color="#000000"><b>
      </br>
    </b></font>
    </td></tr></table>

</br>
</br>

  <font style="font-size:20px;" size="5" color="#000000">
  <#nested "text">
  </font>

</br>
</br>

<#if link??>
<table class="button" bgcolor="#2074d4" cellspacing="2" cellpadding="10"><tr><td>
<a href="${link}"><font style="font-size:19px;" size="4" color="#FFFFFF"><#nested "linkText"></font></a>
</td></tr></table>
</#if>

</body>
</html>
</#macro>
