<?php

    session_start();
    unset($_SESSION['user_mail']);
    session_destroy();
    header('Location:../login.php');
    
?>