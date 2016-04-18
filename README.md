# Práctica 2: Comma separated values (CSV) with AJAX
* La sección *Práctica: Comma Separated Values. CSV* de los [apuntes](http://crguezl.github.io/pl-html/node11.html)
* La [descripción de la práctica](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/csv.html)
* See also [CSV](http://en.wikipedia.org/wiki/Comma-separated_values) at Wikipedia.

**Repositorios GitHub**
* [Repositorio de la Organización](https://github.com/ULL-ESIT-GRADOII-PL/ajax-ecma6-modules-files-ga.git)
* [Repositorio de trabajo](https://github.com/marreA/ajax-ecma6-modules-files-ga.git)


**Página de despliegue de la aplicación:**
* [Web](https://csv-ajax-ga.herokuapp.com/)
* [Pruebas](http://marrea.github.io/localstorage-jquery-underscore-express-sass-heroku-ga/)

**Página de los autores**

* [Gabriel Melián](https://alu0100819786.github.io)
* [Alejandro Marrero](https://marreA.github.io/)

## RegExp
Autómata que representa la expresión regular utilizada para analizar la entrada en formato CSV.
![](img/dfa.png)


## jQuery.get( url [, data ] [, success ] [, dataType ] )
* url
  * Type: String
  * A string containing the URL to which the request is sent.
* data
  * Type: PlainObject or String
  * A plain object or string that is sent to the server with the request.
* success
  * Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
  * A callback function that is executed if the request succeeds.
    Required if `dataType` is provided, but you can use `null` or `jQuery.noop` as a placeholder.
* dataType
  * Type: String
  * The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).

## jQuery.get( [settings ] )
* settings
  * Type: PlainObject
  * A set of key/value pairs that configure the Ajax request.
  * All properties except for `url` are optional.
  * A default can be set for any option with `$.ajaxSetup()`.

This is a shorthand Ajax function, which is equivalent to:

```javascript
$.ajax({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

The success callback function is passed the returned data, which will be an XML root element, text string, JavaScript file, or JSON object, depending on the MIME type of the response. It is also passed the text status of the response.

# Despliegue de referencia en Heroku
https://cvsajax.herokuapp.com/
