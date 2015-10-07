(function () {
	define(["jquery", "d3", "jnj/chart", "common", "datatables"], function ($, d3, jnj_chart, common) {
		var module = {};

		module.render = function (datasource) {
		
			$('#reportMyReport svg').remove();

			$.ajax({
				type: "GET",
				url:  getUrlFromData(datasource, "myreport"),
				contentType: "application/json; charset=utf-8",
			}).done(function (result) {
				
				// population by state
				genderDonut = new jnj_chart.donut();
				genderDonut.render(common.mapConceptData(result.POPULATION_BY_STATE), "#reportMyReport #statePie", 260, 160, {
					colors: d3.scale.ordinal()
						.domain([1,2,3,4,5,6,7,8,9,10,11])
						.range(["#FFD700","#00008B","#8FBC8F","#DB7093","#8B0000","#006400","#BDB76B","#9932CC","#AFEEEE","#FF8C00","#A9A9A9"]),
					margin: {
						top: 5,
						bottom: 10,
						right: 150,
						left: 10
					}
				});
				
				// visits per capita (sorted by population)
				var width = 260;
				var height = 160;
				visitsBar = new jnj_chart.barchart();
				visitsBar.render(common.mapConceptData(result.VISITS_BY_STATE_PER_CAPITA_POP_SORT), "#reportMyReport #visitsBarPop", width, height, {
					colors: d3.scale.ordinal()
						.domain([1,2,3,4,5,6,7,8,9,10,11])
						.range(["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"]),
					margin: {
						top: 5,
						bottom: 10,
						right: 150,
						left: 10
					},
					showCounts: true
				});
				
				// visits per capita (sorted by lift)
				var width = 260;
				var height = 160;
				visitsBar = new jnj_chart.barchart();
				visitsBar.render(common.mapConceptData(result.VISITS_BY_STATE_PER_CAPITA_LIFT_SORT), "#reportMyReport #visitsBarLift", width, height, {
					colors: d3.scale.ordinal()
						.domain([1,2,3,4,5,6,7,8,9,10,11])
						.range(["#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4","#1f77b4"]),
					margin: {
						top: 5,
						bottom: 10,
						right: 150,
						left: 10
					},
					showCounts: true
				});
			});
		}
		return module;
	});
})();
