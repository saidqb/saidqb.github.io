


```
function buildTree(array $elements, $parentId = 0) {
    $branch = array();

    foreach ($elements as $element) {
        if ($element['parent_id'] == $parentId) {
            $children = buildTree($elements, $element['id']);
            if ($children) {
                $element['children'] = $children;
            }
            $branch[] = $element;
        }
    }

    return $branch;
}

$tree = buildTree($rows);

print_r( $tree );
```
[http://sandbox.onlinephpfunctions.com/code/1802e4674fa534c3f5dd1d40cda8b3abec1340c1](http://sandbox.onlinephpfunctions.com/code/1802e4674fa534c3f5dd1d40cda8b3abec1340c1)
[https://stackoverflow.com/questions/13877656/php-hierarchical-array-parents-and-childs/41545233#41545233](https://stackoverflow.com/questions/13877656/php-hierarchical-array-parents-and-childs/41545233#41545233)

