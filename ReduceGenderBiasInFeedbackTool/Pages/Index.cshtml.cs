using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ReduceGenderBiasInFeedbackTool.Data;
using ReduceGenderBiasInFeedbackTool.Models;

namespace ReduceGenderBiasInFeedbackTool.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ReduceGenderBiasInFeedbackTool.Data.ReduceGenderBiasInFeedbackToolContext _context;

        public IndexModel(ReduceGenderBiasInFeedbackTool.Data.ReduceGenderBiasInFeedbackToolContext context)
        {
            _context = context;
        }

        public IList<Feedback> Feedback { get;set; } = default!;

        public async Task OnGetAsync()
        {
            if (_context.Feedback != null)
            {
                Feedback = await _context.Feedback.ToListAsync();
            }
        }

        public IActionResult OnGetAnalyzeFeedback(string text)
        {
            if (String.IsNullOrEmpty(text)) return Content("We detected no biased words in your feedback! Great Job!");
            // call function on it
            var score = EvaluateEntry.CompareWordsAndGetScore(text).ToString();
            return Content(score);
        }
    }
}
