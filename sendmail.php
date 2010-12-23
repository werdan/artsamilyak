<?php
	mail("tetiana.samilyak@gmail.com", "From art.samilyak.kiev.ua by ".$_POST['yourname'], $_POST['comment'], 'Reply-To:'.$_POST['email']);
	header( 'Location: http://art.samilyak.kiev.ua/index.html?mailsent=true' ) ;
?>