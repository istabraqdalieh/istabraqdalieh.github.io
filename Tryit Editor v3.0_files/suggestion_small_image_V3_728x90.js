/**
 * @fileoverview Suggestion Small Image V5 layout javascript.
 */

// Lazy initialization of ad.
function ensureInit() {
  if (!window.theAd) {
    theAd = new Ad();
  }
}

function onAdData(adData) {
  ensureInit();
  processAdData(adData);
}

var Ad = function() {
  // Any loading layout action should be done here.
  loadTemplateContainer([
    {
      type: 'click-url-area',
      layout_id: 'adContent'
    },
    {
      type: 'image',
      layout_id: 'product-image',
      template_id: 'product1MCImage',
      display_mode: 'fit'
    },
    {
      type: 'image',
      layout_id: 'logo-image',
      template_id: 'logoMCImage'
    },
    {
      type: 'text',
      layout_id: 'headline',
      template_id: 'text1TFText',
      template_color_id: 'text1C1TFTextColor',
      origin_offset_x: 28,
      origin_offset_y: -30,
      scale_x: 0.815,
      scale_y: 0.815
    },
    {
      type: 'text',
      layout_id: 'description',
      template_id: 'text2TFText',
      template_color_id: 'text2C1TFTextColor'
    },
    {
      type: 'text',
      layout_id: 'button-text',
      template_id: 'clickTFText',
      template_color_id: 'clickC1TFTextColor',
      origin_offset_x: -8,
      origin_offset_y: -3
    },
    {
      type: 'background',
      layout_id: 'button',
      template_color_ids: ['button1C1MCColor']
    },
    {
      type: 'background',
      layout_id: 'background',
      template_color_ids: ['back1C1MCColor1']
    }
  ]);
};
