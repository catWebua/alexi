<?php
if((isset($_POST['text'])&&$_POST['text']!="")){ 
        $to = 'white.wkval@gmail.com'; 
        $subject = 'Обратный звонок'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>mail: '.$_POST['text'].'</p>                      
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Отправитель <from@example.com>\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>