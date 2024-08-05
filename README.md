# JWrap

This is a library created to make it easy to use by wrapping Element objects.

■ files

jwrap.apidoc.txt: API Document

jwrap.js: Library File

jwrap.min.js: Minify Library File

■ example

let objById = JElement.get('id');

let objByIdAndChildName = JElement.select('id', 'childName');

let objFromGetMethod = JElement.from('id');

let objFromSelectMethod = JElement.from('id', 'childName');

let createElemet = JElement.create('input', 'id', 'name', 'type');

objById.isEmpty().alert('empty!').else((element) -> element.alert('not empty!'));
