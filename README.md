# JWrap

This is a library created to make it easy to use by wrapping Element objects.

■ files

jwrap.apidoc.txt: API Document

jwrap.js: Library File

jwrap.min.js: Minify Library File

■ example
<!DOCTYPE html>
<html>
<script src="./jwrap.js"></script>
<body>
    <from id="parent-id">
        <input type="text" id="test-id" name="child-name" value="test"/>
    </from>
</body>
<script>
let objById = JInput.get('test-id');

let objByIdAndChildName = JElement.select('parent-id', 'child-name');

let objFromGetMethod = JElement.from('test-id');

let objFromSelectMethod = JElement.from('parent-id', 'child-name');

objById.isEmpty().alert('empty!').else((element) => JAction.alert('not empty!'));
</script>
</html>
