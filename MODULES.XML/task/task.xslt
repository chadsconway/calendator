<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template>
    <html>
    <head>
      <link red="stylesheet" href="./task.css"/>
    </head>
    <body>  
      <div class="task-wrapper">
        <div class="task__taskname-block">
            <h1 class="task__taskname-block--title">
                <xsl:value-of select="database/table/column[name='title']"/>            
            </h1>
            <p class="task__taskname-block--linkid">
                
            </p>
        </div>
      </div>
      </body>
      </html>
</xsl:template>
</xsl:stylesheet>