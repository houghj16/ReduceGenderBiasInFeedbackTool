using Microsoft.AspNetCore.Mvc;
using ReduceGenderBiasInFeedbackTool.Models;

namespace ReduceGenderBiasInFeedbackTool.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Form(string body1, string body2, string body3, string body4, string body5, string body6)
        {

            Feedback feedback = new Feedback
            {
                Id = 1,
                Body1 = body1,
                Body2 = body2,
                Body3 = body3,
                Body4 = body4,
                Body5 = body5,
                Body6 = body6,
                HasBeenChecked = true,
                Score = 1
            };

            // Here I must send student object to Web Api
            // URL: "http://localhost:2640/api/students"
            var client = new HttpClient();
            var endpoint = "http://localhost:2640/api/students";
            var response = await client.PostAsJsonAsync(endpoint, feedback);
            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction("Index");
            }
            return View(feedback);
        }
    }
}
