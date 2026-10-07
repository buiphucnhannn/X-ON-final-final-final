Add-Type -AssemblyName System.Drawing

$icoPath = "d:\Career\X-ON final\client\src\app\favicon.ico"
$outPng = "d:\Career\X-ON final\client\public\images\logo.png"

# Read ICO
$fileStream = [System.IO.File]::OpenRead($icoPath)
$icon = New-Object System.Drawing.Icon($fileStream, 256, 256)
$bmp = $icon.ToBitmap()
$bmp.Save($outPng, [System.Drawing.Imaging.ImageFormat]::Png)
$fileStream.Close()

Copy-Item $outPng "d:\Career\X-ON final\client\public\logo.png"
Write-Host "Successfully exported logo to $outPng (Size: $($bmp.Width)x$($bmp.Height))"
