The XHTML 1.1 provides a definition of strictly conforming XHTML documents which MUST meet all the following criteria −

    The document MUST conform to the constraints expressed in XHTML 1.1 Document Type Definition.

    The root element of the document MUST be <html>.

    The root element of the document MUST designate the XHTML namespace using the xmlns attribute.

    The root element MAY also contain a schema location attribute as defined in the XML Schema.

There MUST be a DOCTYPE declaration in the document prior to the root element. If it is present, the public identifier included in the DOCTYPE declaration MUST refer the DTD found in XHTML 1.1 Document Type Definition.

Here is an example of an XHTML 1.1 document −

```
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.w3.org/MarkUp/SCHEMA/xhtml11.xsd" xml:lang="en">

   <head>
      <title>This is the document title</title>
   </head>

   <body>
      <p>Moved to <a href="http://example.org/">example.org</a>.</p>
   </body>

</html>
```

Note − In this example, the XML declaration is included. An XML declaration such as the one above is not required in all XML documents. XHTML document authors are strongly encouraged to use XML declarations in all their documents. Such a declaration is required when the character encoding of the document is other than the default UTF-8 or UTF-16.
XHTML 1.1 Modules

## The XHTML 1.1 document type is made up of the following XHTML modules.

Structure Module − The Structure Module defines the major structural elements for XHTML. These elements effectively act as the basis for the content model of many XHTML family document types. The elements and attributes included in this module are − body, head, html, and title.

Text Module − This module defines all of the basic text container elements, attributes, and their content model − abbr, acronym, address, blockquote, br, cite, code, dfn, div, em, h1, h2, h3, h4, h5, h6, kbd, p, pre, q, samp, span, strong, and var.

Hypertext Module − The Hypertext Module provides the element that is used to define hypertext links to other resources. This module supports element a.

List Module − As its name suggests, the List Module provides list-oriented elements. Specifically, the List Module supports the following elements and attributes − dl, dt, dd, ol, ul, and li.

Object Module − The Object Module provides elements for general-purpose object inclusion. Specifically, the Object Module supports − object and param.

Presentation Module − This module defines elements, attributes, and a minimal content model for simple presentation-related markup − b, big, hr, i, small, sub, sup, and tt.

Edit Module − This module defines elements and attributes for use in editing-related markup − del and ins.

Bidirectional Text Module − The Bi-directional Text module defines an element that can be used to declare the bi-directional rules for the element's content − bdo.

Forms Module − It provides all the form features found in HTML 4.0. Specifically, it supports − button, fieldset, form, input, label, legend, select, optgroup, option, and textarea.

Table Module − It supports the following elements, attributes, and content model − caption, col, colgroup, table, tbody, td, tfoot, th, thead, and tr.

Image Module − It provides basic image embedding and may be used in some implementations of client side image maps independently. It supports the element − img.

Client-side Image Map Module − It provides elements for client side image maps − area and map.

Server-side Image Map Module − It provides support for image-selection and transmission of selection coordinates. The Server-side Image Map Module supports − attribute ismap on img.

Intrinsic Events Module − It supports all the events discussed in XHTML Events.

Meta information Module − The Meta information Module defines an element that describes information within the declarative portion of a document. It includes element meta.

Scripting Module − It defines the elements used to contain information pertaining to executable scripts or the lack of support for executable scripts. Elements and attributes included in this module are − noscript and script.

Style Sheet Module − It defines an element to be used when declaring internal style sheets. The element and attribute defined by this module is − style.

Style Attribute Module (Deprecated) − It defines the style attribute.

Link Module − It defines an element that can be used to define links to external resources. It supports link element.

Base Module − It defines an element that can be used to define a base URI against which relative URIs in the document are resolved. The element and attribute included in this module is − base.

Ruby Annotation Module − XHTML also uses the Ruby Annotation module as defined in RUBY and supports − ruby, rbc, rtc, rb, rt, and rp.
Changes from XHTML 1.0 Strict

This section describes the differences between XHTML 1.1 and XHTML 1.0 Strict. XHTML 1.1 represents a departure from both HTML 4 and XHTML 1.0.

    The most significant is the removal of features that were deprecated.

    The changes can be summarized as follows −

    On every element, the lang attribute has been removed in favor of the xml:lang attribute.

    On the <a> and <map> elements, the name attribute has been removed in favor of the id attribute.

    The ruby collection of elements has been added.

## XHTML - Tips & Tricks

This chapter lists out various tips and tricks which you should be aware of while writing an XHTML document. These tips and tricks can help you create effective documents.
Tips for Designing XHTML Document

Here are some basic guidelines for designing XHTML documents −
Design for Serving and Engaging Your Audience

When you think of satisfying what your audience wants, you need to design effective and catchy documents to serve the purpose. Your document should be easy for finding required information and giving a familiar environment.

For example, Academicians or medical practitioners are comfortable with journal-like document with long sentences, complex diagrams, specific terminologies, etc., whereas the document accessed by school-going children must be simple and informative.
Reuse Your Document

Reuse your previously created successful documents instead of starting from scratch each time you bag a new project.

## Inside the XHTML Document

Here are some tips regarding elements inside the XHTML document −

## The XML Declaration

An XML declaration is not required in all XHTML documents but XHTML document authors are strongly encouraged to use XML declarations in all their documents. Such a declaration is required when the character encoding of the document is other than the default UTF-8 or UTF-16.

## Empty Elements

```
They include a space before the trailing / and > of empty elements. For example, <br />, <hr />, and <img src="/html/xhtml.gif" alt="xhtml" />.
Embedded Style Sheets and Scripts

Use external style sheets if your style sheet uses “<”, “&”, “]]>”, or “—”.
```

Use external scripts if your script uses “<”, “&”, or “]]>”, or “—”.
Line Breaks within Attribute Values

Avoid line breaks and multiple whitespace characters within attribute values. These are handled inconsistently by different browsers.
Isindex Element

Do not include more than one isindex element in the document head. The isindex element is deprecated in favor of the input element.
The lang and xml:lang Attributes

Use both the lang and xml:lang attributes while specifying the language of an element. The value of the xml:lang attribute takes precedence.
Element Identifiers

XHTML 1.0 has deprecated the name attributes of a, applet, form, frame, iframe, img, and map elements. They will be removed from XHTML in subsequent versions. Therefore, start using id element for element identification.
Using Ampersands in Attribute Values

The ampersand character ("&") should be presented as an entity reference &.
Example

```
<!-- This is invalid in XHTML -->
http://my.site.dom/cgi-bin/myscript.pl?class=guest&name=user.

<!-- Correct XHTML way of writing this is as follows -->
http://my.site.dom/cgi-bin/myscript.pl?class=guest&name=user
```

## Whitespace Characters in HTML and XML

Some characters that are legal in HTML documents are illegal in XML document. For example, in HTML, the form-feed character (U+000C) is treated as white space, in XHTML, due to XML's definition of characters, it is illegal.
Named Character Reference &Apos;

The named character reference ' (the apostrophe, U+0027) was introduced in XML 1.0 but does not appear in HTML. Web developers should therefore use `&#39;` instead of ' to work as expected in HTML 4 Web Browsers.
XHTML - Val
