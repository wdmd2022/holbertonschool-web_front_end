function createElement(data) {
    // it creates a paragraph element
    // the content of the paragraph is set to `data`
    // it appends to the document `body` the paragraph
    const ll_cool_paragraph = document.createElement("p");
    const ll_cool_p_text_node = document.createTextNode(`${data}`);
    ll_cool_paragraph.appendChild(ll_cool_p_text_node);
    const ll_cool_document_body = document.body;
    ll_cool_document_body.appendChild(ll_cool_paragraph);
}

function queryWikipedia(callback) {
    const ll_cool_xml_http_request = new XMLHttpRequest();
    ll_cool_xml_http_request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    ll_cool_xml_http_request.onload = callback(ll_cool_xml_http_request.responseText);
}
queryWikipedia(createElement);