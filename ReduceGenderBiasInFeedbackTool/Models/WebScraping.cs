using Microsoft.AspNetCore.Html;
using System.Text.Json;

namespace ReduceGenderBiasInFeedbackTool.Models
{
    public class WebScraping
    {
        public static async void WebScrape()
        {
            HttpClient client = new HttpClient();
            Stream streamTask = await client.GetStreamAsync("https://research.mondeca.com/demo/vago/#");
            Console.WriteLine(streamTask);
            StreamReader reader = new StreamReader(streamTask);
            var html = await reader.ReadToEndAsync();
            Console.Write(html);
        }
    }
}
