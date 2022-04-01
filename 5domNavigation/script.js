// получаем псевдомасив состоящий из всех дочерних элементов (без нодов)
for (let node of document.body.childNodes) {
   if ((node.nodeName == '#text') || (node.nodeName == '#comment')) {
       continue;
   }
   
}

console.log(document.body.childNodes);