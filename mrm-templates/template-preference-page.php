<?php
/**
 * Template Name: Preference page
 *
*/

get_header();
?>

<main class="mintmrm-main mintmrm-page-template-main">
    <section class="mintmrm-container">
        <?php the_content(); ?>

        <form>
            <div class="mrm-form-group">
                <label for="">Email Address</label>
                <input type="email" name="email" placeholder="example@example.com" >
            </div>

            <div class="mrm-form-group">
                <label for="">First Name</label>
                <input type="text" name="first-name" placeholder="Enter your Frist Name" >
            </div>

            <div class="mrm-form-group">
                <label for="">Last Name</label>
                <input type="text" name="last-name" placeholder="Enter your Last Name" >
            </div>

            <div class="mrm-form-group">
                <label for="">Mailing List Group</label>
                
                <div class="mrm-checkbox-group">
                    <label for="label1">
                        <input type="checkbox" name="" id="label1" >
                        Label 1
                    </label>
                </div>

                <div class="mrm-checkbox-group">
                    <label for="label2">
                        <input type="checkbox" name="" id="label2" >
                        Label 2
                    </label>
                </div>
            </div>

            <div class="mrm-form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
        
    </section>
</main>


<?php
get_footer();
?>
