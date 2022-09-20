using HtmlAgilityPack;
using Microsoft.AspNetCore.Html;
using System.Text.Json;

namespace ReduceGenderBiasInFeedbackTool.Models
{
    public class WebScraping
    {
        public static async void GetWebpageContent()
        {
            HttpClient client = new HttpClient();
            Stream streamTask = await client.GetStreamAsync("https://research.mondeca.com/demo/vago/#");
            Console.WriteLine(streamTask);
            StreamReader reader = new StreamReader(streamTask);
            var html = await reader.ReadToEndAsync();
            Console.Write(html);
        }

        public static async void GetWebpageContentHtml()
        {
            HtmlWeb web = new HtmlWeb();
            Uri uri = new Uri("https://research.mondeca.com/demo/vago/#");

            // Populate the form variable
            var formVariables = new List<KeyValuePair<string, string>>();
            formVariables.Add(new KeyValuePair<string, string>("corpus-form-textarea", "this is sometimes probably a thing."));
            var formContent = new FormUrlEncodedContent(formVariables);

            // submit the form
            HttpClient client = new HttpClient();
            var response = await client.PostAsync(uri, formContent);

            var htmlfromresponse = await response.Content.ReadAsStringAsync();
            Console.WriteLine(htmlfromresponse);

            Stream streamTask = await client.GetStreamAsync("https://research.mondeca.com/demo/vago/#");
            Console.WriteLine(streamTask);
            StreamReader reader = new StreamReader(streamTask);
            var html = await reader.ReadToEndAsync();
            Console.WriteLine(html);
        }
    }
}
