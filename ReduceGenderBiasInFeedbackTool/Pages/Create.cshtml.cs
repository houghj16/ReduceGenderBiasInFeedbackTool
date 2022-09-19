using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using ReduceGenderBiasInFeedbackTool.Data;
using ReduceGenderBiasInFeedbackTool.Models;

namespace ReduceGenderBiasInFeedbackTool.Pages
{
    public class CreateModel : PageModel
    {
        private readonly ReduceGenderBiasInFeedbackTool.Data.ReduceGenderBiasInFeedbackToolContext _context;

        public CreateModel(ReduceGenderBiasInFeedbackTool.Data.ReduceGenderBiasInFeedbackToolContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Feedback Feedback { get; set; }
        

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
          if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Feedback.Add(Feedback);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
