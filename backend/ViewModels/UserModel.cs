using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
    public class UserModel
    {
               [Required]
        public string name { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "you must specify password between4 and 8 character")]
        public string password { get; set; }
        public string isAdmin { get; set; }
    }
}