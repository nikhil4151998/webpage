var obj= httpGetAsync('https://www.quandl.com/api/v3/datasets/NSE/TATAMOTORS?api_key=yai2JanjFfiKAuBtht3n', convertToCsvFile);
function httpGetAsync(theUrl, convertToCsvFile) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200)
			convertToCsvFile(this.response);
    }
	
    xmlHttp.open("GET", theUrl, true);
	xmlHttp.responseType='json';
    xmlHttp.send();
}

function convertToCsvFile(data) {
	// convert data to csv
	const csvDataRows = [];
	csvDataRows.push(data.dataset.column_names);
	csvDataRows.push(data.dataset.data);
	var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
			result+=','
            finalVal += result+'\n';
        }
		
        return finalVal;
    };
	var processHeader= function(header){
		 var finalVal = '';
         for (var j = 0; j < header.length; j++) {
            var innerValue = header[j] === null ? '' : header[j].toString();
            if (header[j] instanceof Date) {
                innerValue = header[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
		
        return finalVal+'\n';
	};
    var csvFile = '';
	csvFile += processHeader(csvDataRows[0]);
    for (var i = 1; i < csvDataRows.length; i++) {
        csvFile += processRow(csvDataRows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
	saveAs(blob, 'dataset.csv');
	console.log(csvDataRows);
	
}