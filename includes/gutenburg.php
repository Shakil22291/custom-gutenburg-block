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
