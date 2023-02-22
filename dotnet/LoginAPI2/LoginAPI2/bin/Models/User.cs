namespace LoginAPI2.Models
{
	public class User
	{
		public string Username { get; set; } = string.Empty;
		public byte[] PasswordHash { get; set; }
		public byte[] PasswordSalt { get; set; }
		public string isManager { get; set; } = string.Empty;

		public string accessToken { get; set; } = string.Empty;
		public string refreshToken { get; set; } = string.Empty;
		public DateTime TokenCreated { get; set; }
		public DateTime TokenExpires { get; set; }
	}
}
