<?php

/**
 * Custom gutenburg block functions
 */
function myblock_defalut_colors()
{
    add_theme_support(
        'editor-color-palette',
        [
            [
                'name'  => 'White',
                'slug'  => 'white',
                'color' => '#ffffff',
            ],
            [
                'name'  => 'Black',
                'slug'  => 'black',
                'color' => '#000000',
            ],
            [
                'name'  => 'Pink',
                'slug'  => 'pink',
                'color' => '#ff4444',
            ],
        ]
    );

    add_theme_support(
        'editor-font-sizes',
        [
            [
                'name' => 'Normal',
                'slug' => 'normal',
                'size' => 16
            ],
            [
                'name' => 'Large',
                'slug' => 'large',
                'size' => 24
            ],
        ]
    );
}
add_action('init', 'myblock_defalut_colors');

function my_gutenburg_blocks()
{
    wp_register_script(
        'custom-cta',
        plugin_dir_url(__DIR__) . '/build/index.js',
        ['wp-blocks', 'wp-editor', 'wp-components']
    );

    register_block_type(
        'myblock/custom-cta',
        [
            'editor_script' => 'custom-cta'
        ]
    );
}

add_action('init', 'my_gutenburg_blocks');
