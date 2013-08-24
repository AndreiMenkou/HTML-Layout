/**
 * Created with PyCharm.
 * User: devil
 * Date: 8/24/13
 * Time: 11:07 AM
 * To change this template use File | Settings | File Templates.
 */

var Shadows = {};

Shadows.add = function(element, shadows) {
    if (typeof element == "string")
        element = document.getElementById(element);

    shadows = shadows.trim();
    var args = shadows.split(/\s+/);
    var textNode = element.firstChild;

    element.style.position = "relative";

    for (var i = 0; i < args.length; i += 3) {
        var shadowX = args[i];
        var shadowY = args[i + 1];
        var shadowColor = args[i + 2];
        var shadow = document.createElement("span");

        shadow.setAttribute("style", "position: absolute; width: 100%;" +
            "left: " + shadowX + "; " + "top: " + shadowY + "; " +
            "color: " + shadowColor + ";");
        shadow.appendChild(textNode.cloneNode(false));

        element.appendChild(shadow);
    }
    var text = document.createElement("span");
    text.setAttribute("style", "position: relative; top: 0px; left: 0px;");
    text.appendChild(textNode);
    element.appendChild(text);

}

Shadows.addAll = function(root, tagName) {
    if (!root) root = document;
    if (!tagName) tagName = "*";

    var elements = root.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        var shadow = elements[i].getAttribute("shadow");
        if (shadow) Shadows.add(elements[i], shadow);
    }
};
