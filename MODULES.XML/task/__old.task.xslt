<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <head>
  <link red="stylesheet" href="./task.css"/>
  </head>
  <body>

  <div class="task">
  <div class="task__taskname-block">
    <h1 class="card-title">
    <xsl:value-of select="task/taskname"/>
  </h1>
  <div class="task__timesheets-block">
    <table class="task__timesheets-table">
    <tr>
<td colspan="3">Timesheets</td>
</tr>
        <tr>
          <th>Type:</th>
          <th>Start-Time</th>
          <th>End-time</th>
        </tr>
      
        <tr>
          <td>Estimated</td>
          <td><xsl:value-of select="estimated-start-time"/></td>
          <td><xsl:value-of select="estimated-end-time"/></td>
        </tr>
        <tr>
          <td colspan="3">Actual</td>
        </tr>
          <xsl:for-each select="task/tasktimesheets/timesheet">
        <tr>
            <td rel="task-timesheets-date">ndc-insertDate</td>
            <td rel="task-timesheets-starttime"><xsl:value-of select="actual-start-time/timelog/timestamp"/></td>
            <td rel="task-timesheets-endtime"><xsl:value-of select="actual-end-time/timelog/timestamp"/></td>
            <td rel="task-timesheets-hours"></td>
        </tr>
        </xsl:for-each>
      
    </table>
  </div>
    
  </div>
  <div class="task__project-block">
  <div class="project-block block">
    <h2>Project: <xsl:value-of select="task/project/title"/></h2>
      <h3>LinkID: <xsl:value-of select="task/project/linkid"/></h3>
      </div>    
      <table border="1">
      
      <tr>
        <th colspan="3">Notes: </th>
      </tr>      
          <xsl:for-each select="task/notes/note">
      <tr>
          <td colspan="3">
              <h4 class="note-title">Title: <xsl:value-of select="title"/></h4>
          </td>
        </tr>
        <tr rowspan="2">
          <td colspan="3">
              <p class="note-summary">Summary: <xsl:value-of select="summary"/></p>
          </td>
        </tr>
          </xsl:for-each>
</table>
  </div>
  <div class="card-footer">
      <h4>Feature: <xsl:value-of select="task/feature"/></h4>
      <h4>Status: <xsl:value-of select="task/status"/></h4>
  </div>
</div>
<script type="text/javascript" src="./task.js"></script>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>