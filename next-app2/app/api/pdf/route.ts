import { NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        
        // Read the template PDF
        const templatePath = path.join(process.cwd(), 'public', 'forms', 'petappl.pdf');
        const pdfBytes = readFileSync(templatePath);
        
        // Load the PDF document
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const form = pdfDoc.getForm();

        // Fill form fields
        // Note: Field names must match exactly with your PDF form fields
        form.getTextField('NAME OF PETITIONER').setText(formData.name);
        form.getTextField('MAILING ADDRESS').setText(
            `${formData.street}, ${formData.city}, ${formData.state} ${formData.zipCode}`
        );
        form.getTextField('E-mail Address').setText(formData.email);
        form.getTextField('REASON FOR APPEAL').setText(formData.appeal);

        // Save the filled PDF
        const filledPdfBytes = await pdfDoc.save();
        const outputPath = path.join(
            process.cwd(), 
            'public', 
            'forms', 
            'filled', 
            `${formData.name.replace(/\s+/g, '_')}_appeal.pdf`
        );
        
        writeFileSync(outputPath, filledPdfBytes);

        return NextResponse.json({ 
            success: true, 
            filePath: `/forms/filled/${formData.name.replace(/\s+/g, '_')}_appeal.pdf` 
        });

    } catch (error) {
        console.error('Error filling PDF:', error);
        return NextResponse.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
}