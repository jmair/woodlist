angular.module('woodlist', [])
.controller('listController', function(){
	list = this;
	list.sortBy = 'description';
	list.products = [
		{
			"description": "Bracket",
			"size": "1",
			"length": 1,
			"price": 2.80
		},
		{
			"description": "Trex",
			"size": "2x6x16'",
			"length": 16,
			"price": 36.97
		},
		{
			"description": "Trex",
			"size": "2x6x12'",
			"length": 12,
			"price": 17.27
		},
		{
			"description": "Fir",
			"size": "2x6x10'",
			"length": 10,
			"price": 14.37
		},
		{
			"description": "Fir",
			"size": "2x6x8'",
			"length": 8,
			"price": 11.47
		},
		{
			"description": "Rough Cedar",
			"size": "2x4x8'",
			"length": 8,
			"price": 7.98
		},
		{
			"description": "Fir",
			"size": "2x10x8'",
			"length": 8,
			"price": 8.89
		},
		{
			"description": "Fir",
			"size": "2x12x8'",
			"length": 8,
			"price": 12.55
		},
		{
			"description": "Fir",
			"size": "2x8x8'",
			"length": 8,
			"price": 6.24
		},
		{
			"description": "Fir",
			"size": "2x8x10'",
			"length": 10,
			"price": 7.82
		},
		{
			"description": "Fir",
			"size": "2x10x10'",
			"length": 10,
			"price": 11.32
		},
		{
			"description": "Fir",
			"size": "2x12x10'",
			"length": 10,
			"price": 15.69
		},
		{
			"description": "Fir",
			"size": "2x12x12'",
			"length": 12,
			"price": 18.83
		},
		{
			"description": "Fir",
			"size": "2x10x12'",
			"length": 12,
			"price": 13.59
		},
		{
			"description": "Fir",
			"size": "2x8x12'",
			"length": 12,
			"price": 9.76
		},
		{	
			"description": "Fir",
			"size": "2x12x16'",
			"length": 16,
			"price": 25.12
		},
		{	
			"description": "Fir",
			"size": "2x10x16'",
		}
	];

});
