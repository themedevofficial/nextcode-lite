<?php
namespace NextCode\Inc\Fileds\Text;
defined( 'ABSPATH' ) || exit;

use \NextCode\Inc\Setup\Ncode_common as Ncode_common;

Class Ncode_Text Extends Ncode_common{

    private $settings = [];
    private $key = '';
    private $option_key = '';
    private $option_data = [];

    private $args = [
        'id'    => '',
        'type'    => 'text',
        'title'   => '',
        'desc'       => '',
        'default'    => '',
        'attr' => [],
        'action' => [],
    ];
    private static $instance;


    public function render( $params, $setting = [] , $key = '' ){
         
        $this->key = $key;
        $this->settings = $setting;

        $this->option_key = isset($setting['options_key']) ? $setting['options_key'] : '';
        $this->option_type = isset($setting['options_type']) ? $setting['options_type'] : 'options';
        $this->options_ids = isset($setting['options_ids']) ? $setting['options_ids'] : 0;

        $this->option_data = $this->_get_options( $this->option_key, $this->option_type, $this->options_ids);
        $array_dec = isset($setting['options_array']) ? $setting['options_array'] : 'options['.$this->key.']';
        // code here
        
        $this->args = $params;
        $this->args['attr']['id'] = isset( $this->args['attr']['id'] ) ? $this->args['attr']['id'] : $this->args['id'];
        $this->args['attr']['type'] = isset( $this->args['attr']['type'] ) ? $this->args['attr']['type'] : 'text';
        $this->args['attr']['class'] = isset( $this->args['attr']['class'] ) ? 'nxinput-box '.$this->args['attr']['class'] : 'nxinput-box';
        
        $this->args['default'] = isset( $this->args['default'] ) ? $this->args['default'] : '';
        $this->args['attr']['value'] = isset( $this->args['attr']['value'] ) ? $this->args['attr']['value'] : $this->args['default'];
        
        $name = $this->args['id'];
        $id = $this->args['id'];
        if( isset($this->option_data[$this->key][$name]) ){
            $this->args['attr']['value'] = $this->option_data[$this->key][$name];
        }

        $repeater = $this->args['repeater'] ?? false;
        if($repeater){
            $r_name =  $this->args['attr']['name'] ?? '';
            if( !empty($r_name) ){
                $this->args['attr']['name'] = $r_name;
            }
        } else{
            $this->args['attr']['name'] =  $this->args['id'];
        }
    
        // load js / css
        $this->enqueue();
        extract( $this->args );
        include ( __DIR__ . '/templates.php');
    }

    public function enqueue(){

    }
    
    /*
    ** Render css
    */
    public function css_render($output, $value, $fileds= []){
        $selector = isset( $output['selector'] ) ? $output['selector'] : '';
        $render = isset( $output['render'] ) ? $output['render'] : '';
        $selectors = isset( $output['selectors'] ) ? $output['selectors'] : '';
        $css_render = "";

        if( empty($render) || is_array($value) ){
           return;
        }

        if( is_array($selector) && !empty($selector) ){
            foreach($selector as $vs){
                if( empty($vs) ){
                    continue;
                }
                $css_render .= "$vs { $render:$value; }";
            }
        }else{
            $css_render .= "$selector { $render:$value; }";
        }
        
        if( !empty($selectors) && is_array($selectors) ){
            foreach($selectors as $ck=>$cv){
                if( strstr($cv, "{{VALUE}}") ){
                    $value_data = str_replace( "{{VALUE}}" , $value, $cv);
                    $css_render .= "$ck { $value_data }";
                }else{
                    $css_render .= "$ck { $cv:$value; }";
                }
               
            }
        }

        return $css_render;
    }
    
	public static function instance(){
		if (!self::$instance){
            self::$instance = new self();
        }
        return self::$instance;
	}
}