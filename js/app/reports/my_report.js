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

                                // create visualization
				genderDonut = new jnj_chart.donut();
                                genderDonut.render(common.mapConceptData(result.GENDER_DATA), "#reportMyReport #genderPie", 260, 100, {
                                        colors: d3.scale.ordinal()
                                                .domain([8507, 8551, 8532])
                                                .range(["#1f77b4", " #CCC", "#ff7f0e"]),
                                        margin: {
                                                top: 5,
                                                bottom: 10,
                                                right: 150,
                                                left: 10
                                        }
                                });
                        });
                }
                return module;
        });
})();
