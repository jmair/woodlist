angular.module('woodlist', [])
.controller('listController', function(){
	list = this;
	list.sorter = 'description';
	list.sortByColumn = function(columnName) {
		var name = this.sorter == columnName ? '-' + columnName : columnName;
		list.sorter = name;
	};
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
			"description": "Redwood",
			"size": "2x6x12'",
			"length": 12,
			"price": 17.27
		},
		{
			"description": "Redwood",
			"size": "2x6x10'",
			"length": 10,
			"price": 14.37
		},
		{
			"description": "Redwood",
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
			"length": 16,
			"price": 18.12
		},
		{
			"description": "Fir",
			"size": "2x8x16'",
			"length": 16,
			"price": 12.97
		},
		{
			"description": "Cedar",
			"size": "7/8x12x8'",
			"length": 8,
			"price": 34.26
		},
		{
			"description": "Cedar",
			"size": "7/8x8x12'",
			"length": 12,
			"price": 27.32
		},
		{
			"description": "Cedar",
			"size": "7/8x8x8'",
			"length": 8,
			"price": 18.28
		},
		{
			"description": "Cedar",
			"size": "7/8x4x8'",
			"length": 8,
			"price": 7.12
		},
		{
			"description": "Fir",
			"size": "1x4x8'",
			"length": 8,
			"price": 4.83
		},
		{
			"description": "Fir",
			"size": "1x4x10'",
			"length": 10,
			"price": 6.12
		},
		{
			"description": "Fir",
			"size": "1x4x12'",
			"length": 12,
			"price": 7.33
		},
		{
			"description": "Fir",
			"size": "1x16x6'",
			"length": 6,
			"price": 9.39
		},
		{
			"description": "Fir",
			"size": "1x10x8'",
			"length": 8,
			"price": 12.48
		},
		{
			"description": "Hardboard",
			"size": "1x6x16'",
			"length": 16,
			"price": 21.55
		},
		{
			"description": "Hardboard",
			"size": "1x4x16'",
			"length": 16,
			"price": 13.35
		},
		{
			"description": "Pressure Treated",
			"size": "2x8x16'",
			"length": 16,
			"price": 21.97
		},
		{
			"description": "Pressure Treated",
			"size": "2x10x16'",
			"length": 16,
			"price": 29.57
		},
		{
			"description": "Pressure Treated",
			"size": "2x12x12'",
			"length": 12,
			"price": 27.77
		},
		{
			"description": "Pressure Treated",
			"size": "2x6x12'",
			"length": 12,
			"price": 11.57
		},
		{
			"description": "Pressure Treated",
			"size": "2x4x10'",
			"length": 10,
			"price": 6.17
		},
		{
			"description": "Pressure Treated",
			"size": "2x6x10'",
			"length": 10,
			"price": 9.57
		},
		{
			"description": "Pressure Treated",
			"size": "2x6x8'",
			"length": 8,
			"price": 7.57
		},
		{
			"description": "Pressure Treated",
			"size": "2x4x8'",
			"length": 8,
			"price": 4.67
		},
		{
			"description": "Pressure Treated",
			"size": "2x4x16'",
			"length": 16,
			"price": 9.97
		},
		{
			"description": "Pressure Treated",
			"size": "2x12x8'",
			"length": 8,
			"price": 18.27
		},
		{
			"description": "Pressure Treated",
			"size": "2x8x8'",
			"length": 8,
			"price": 10.77
		},
		{
			"description": "Fir",
			"size": "5/8x5-1/2x6'",
			"length": 6,
			"price": 1.94
		},
		{
			"description": "Cedar",
			"size": "5/8x5-1/2x6'",
			"length": 6,
			"price": 2.55
		},
		{
			"description": "Cedar",
			"size": "5/8x3-1/2x6'",
			"length": 6,
			"price": 1.58
		},
		{
			"description": "Redwood",
			"size": "2x2x8'",
			"length": 8,
			"price": 3.97
		},
		{
			"description": "Redwood",
			"size": "3-3/8x3-3/8x10'",
			"length": 10,
			"price": 18.77
		},
		{
			"description": "Redwood",
			"size": "2x4x10'",
			"length": 10,
			"price": 9.47
		},
		{
			"description": "Redwood",
			"size": "3-3/8x3-3/8x10'",
			"length": 10,
			"price": 14.77
		},
		{
			"description": "Redwood",
			"size": "2x2x4'",
			"length": 4,
			"price": 2.37
		},
		{
			"description": "Redwood Ball Cap",
			"size": "3",
			"length": 1,
			"price": 5.27
		},
		{
			"description": "Cedar Cap",
			"size": "1",
			"length": 1,
			"price": 5.57
		},
		{
			"description": "Redwood",
			"size": "2x6x16'",
			"length": 16,
			"price": 22.97
		},
		{
			"description": "Redwood",
			"size": "2x12x10'",
			"length": 10,
			"price": 31.67
		},
		{
			"description": "Redwood",
			"size": "4x4x4'",
			"length": 4,
			"price": 21.57
		},
		{
			"description": "Redwood Lattice",
			"size": "1/4x4'x8'",
			"length": 8,
			"price": 14.97
		},
		{
			"description": "Redwood Lattice",
			"size": "7/16x4'x8'",
			"length": 8,
			"price": 30.57
		},
		{
			"description": "Vinyl Rail",
			"size": "1x6x16'",
			"length": 16,
			"price": 15.97
		},
		{
			"description": "Vinyl Post",
			"size": "5x5x7'",
			"length": 7,
			"price": 14.97
		},
		{
			"description": "Fir",
			"size": "2x8x12'",
			"length": 12,
			"price": 9.76
		},
		{
			"description": "Fir",
			"size": "2x10x12'",
			"length": 12,
			"price": 13.59
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
			"description": "Blue Pattern",
			"size": "1x4x8'",
			"length": 8,
			"price": 4.87
		},
		{
			"description": "Blue Pattern",
			"size": "1x6x12'",
			"length": 12,
			"price": 8.18
		},
		{
			"description": "Blue Pattern",
			"size": "1x6x10'",
			"length": 10,
			"price": 6.81
		},
		{
			"description": "Blue Pattern",
			"size": "1x6x8'",
			"length": 8,
			"price": 5.46
		},
		{
			"description": "Fir",
			"size": "2x6x16'",
			"length": 16,
			"price": 10.67
		},
		{
			"description": "Fir",
			"size": "2x6x12'",
			"length": 12,
			"price": 7.98
		},
		{
			"description": "Fir",
			"size": "2x6x10'",
			"length": 10,
			"price": 6.67
		},
		{
			"description": "Fir",
			"size": "2x6x8'",
			"length": 8,
			"price": 5.28
		},
		{
			"description": "Fir",
			"size": "2x6x7'",
			"length": 7,
			"price": 3.36
		},
		{
			"description": "Fir",
			"size": "2x2x8'",
			"length": 8,
			"price": 3.97
		},
		{
			"description": "Cedar",
			"size": "2x4x8'",
			"length": 8,
			"price": 7.98
		},
		{
			"description": "Fir",
			"size": "2x4x8'price guess",
			"length": 8,
			"price": 3.50
		}
	];
});
