using System.ComponentModel.DataAnnotations;
using System;

namespace API.Data.Dtos
{
    public class ReadFilmeDto
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo título é obrigatório!")]
        public string Titulo { get; set; }
        public string Diretor { get; set; }
        [Required(ErrorMessage = "O campo Diretor é obrigatório!")]
        public string Genero { get; set; }
        [Range(1, 600, ErrorMessage = "A duração deve ser no maximo de 600 minutos.")]
        public int Duracao { get; set; }
        public DateTime HoraDaConsulta { get; set; }
    }
}
