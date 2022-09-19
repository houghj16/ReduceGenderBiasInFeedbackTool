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
    public class DeleteModel : PageModel
    {
        private readonly ReduceGenderBiasInFeedbackTool.Data.ReduceGenderBiasInFeedbackToolContext _context;

        public DeleteModel(ReduceGenderBiasInFeedbackTool.Data.ReduceGenderBiasInFeedbackToolContext context)
        {
            _context = context;
        }

        [BindProperty]
      public Feedback Feedback { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null || _context.Feedback == null)
            {
                return NotFound();
            }

            var feedback = await _context.Feedback.FirstOrDefaultAsync(m => m.Id == id);

            if (feedback == null)
            {
                return NotFound();
            }
            else 
            {
                Feedback = feedback;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null || _context.Feedback == null)
            {
                return NotFound();
            }
            var feedback = await _context.Feedback.FindAsync(id);

            if (feedback != null)
            {
                Feedback = feedback;
                _context.Feedback.Remove(Feedback);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
