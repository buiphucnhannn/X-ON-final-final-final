Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxPath = "d:\Career\X-ON final\docs\requirement.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

# Parse paragraphs and tables cleanly
$xmlContent = [xml]$xml
$paragraphs = @()
foreach ($p in $xmlContent.document.body.ChildNodes) {
    $text = $p.InnerText
    if (![string]::IsNullOrWhiteSpace($text)) {
        $paragraphs += $text
    }
}

$paragraphs | Out-File -FilePath "d:\Career\X-ON final\docs\requirement_extracted.txt" -Encoding utf8
Write-Host "Extracted successfully"
