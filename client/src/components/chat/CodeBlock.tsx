import { useState } from "react";
import { Copy, Download, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
}

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied!",
        description: "Code has been copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy code to clipboard.",
        variant: "destructive",
      });
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || `code.${language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const previewCode = () => {
    if (language === "html") {
      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(code);
        newWindow.document.close();
      }
    } else {
      toast({
        title: "Preview",
        description: "Preview is only available for HTML code.",
      });
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-300">
          {filename || `code.${language}`}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="text-sm text-gray-300 hover:text-white"
        >
          Copy
        </Button>
      </div>
      <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
        <code>{code}</code>
      </pre>
      <div className="flex items-center space-x-3 p-4 bg-gray-800">
        <Button
          onClick={downloadCode}
          className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600"
        >
          <Download className="w-4 h-4" />
          <span>Download</span>
        </Button>
        {language === "html" && (
          <Button
            onClick={previewCode}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </Button>
        )}
        <Button
          variant="outline"
          className="flex items-center space-x-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 hover:bg-accent-200 dark:hover:bg-accent-900/50"
        >
          <Zap className="w-4 h-4" />
          <span>Improve</span>
        </Button>
      </div>
    </div>
  );
}
