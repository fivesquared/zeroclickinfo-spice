(function (env) {
    "use strict";

    env.ddg_spice_mo = function(api_result) {

        // Validate the response (customize for your Spice)
        if (!api_result || api_result.error || !api_result.results || api_result.results.length === 0) {
            return Spice.failed('mo');
        }

        // Render the response
        Spice.add({
            id: 'mo',

            // Customize these properties
            name: 'Learn with Mo',
            data: api_result.results,
            meta: {
                sourceName: 'Mo',
                sourceUrl: 'https://scad.ai'
            },
            normalize: function(item) {
                return {
                    // customize as needed for your chosen template
                    title: item.name,
                    description: item.name,
                    url: "https://scad.ai"
                };
            },
            templates: {
                group: 'text',
                item_detail: false,
                detail: false       
            }
        });
    };
}(this));
