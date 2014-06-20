nested-menu
===========

A small, clean, nested dropdown menu that supports expansion by :hover and/or click events. 

###Usage

To use with _just_ css, simply uncomment the ```.nested-menu li: hover ul``` statement.
  
To use with click events, add this to your doc.ready handler: ```$('.nested-menu').nestedMenu();```.
  
If in the event you are using this menu in a single page app and need it to go away, you can call the destroy method to unbind all events thusly: ```$('.nested-menu').nestedMenu().destroy();```
  
~Enjoi
