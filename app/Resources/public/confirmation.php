<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="Imagetoolbar" content="No"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php esc_html_e('Email Confirmation', 'mrm') ?></title>
    <?php
        wp_head();
    ?>
</head>

<body>
<div class="mrm_wrapper" style="margin: 0 auto;
    max-width: 600px;
    padding: 0px 0px 1px;background: #eddfdf;
    text-align: center;">
    <div class="mrm_title">
        <h3>Mint CRM</h3>
    </div>
    <div class="mrm_form_wrapper">
        <?php
        $server = isset( $_SERVER['SERVER_PROTOCOL'] ) ? $_SERVER['SERVER_PROTOCOL'] : "";
        $protocol = strpos(strtolower($server), 'https') === FALSE ? 'http' : 'https';
        $domainLink = $protocol . '://' . $_SERVER['HTTP_HOST'];
        ?>
        <h2>Subscription Confirmed</h2><p>Your subscription to our list has been confirmed.</p><p>Thank you for subscribing!</p><p>&nbsp;</p><p>Mint CRM</p><p>Dhaka, Bangladesh - 1362</p><p>&nbsp;</p><p><a style="color: #ffffff; background-color: #404040; font-size: 16px; border-radius: 5px; text-decoration: none; font-weight: normal; font-style: normal; padding: 0.8rem 1rem; border-color: #0072ff;" href="<?php $domainLink?>">Continue to our Website</a></p>    </div>
</div>
<?php
    wp_footer();
?>
</body>
</html>
