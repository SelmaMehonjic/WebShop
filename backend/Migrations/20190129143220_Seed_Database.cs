﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApi.Migrations
{
    public partial class Seed_Database : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (2, N'saksija')
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (3, N'torba')

GO
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 
GO
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Picture], [CategoryId]) VALUES (1016, N'saksija', N'paket', 30, N'http://www.kucastil.rs/uploads/ck_editor/images/clanci/HORTIKULTURA/Saksija%20koja%20prati%20rast%20biljaka/Saksija-koja-prati-rast-biljaka-624x416.jpg', 2)
GO
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Picture], [CategoryId]) VALUES (1017, N'saksija1', N'paket', 30, N'http://www.kucastil.rs/uploads/ck_editor/images/clanci/HORTIKULTURA/Saksija%20koja%20prati%20rast%20biljaka/Saksija-koja-prati-rast-biljaka-624x416.jpg', 3)
GO
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (22, 1, 1016, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 2, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (23, 1, 1016, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 2, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (24, 1, 1016, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (28, 1, 1017, CAST(N'2019-01-29T10:22:50.6020000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (29, 1, 1016, CAST(N'2019-01-29T10:22:40.6160000' AS DateTime2), 0, 0)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (30, 1, 1016, CAST(N'2019-01-29T13:58:52.0850000' AS DateTime2), 0, 0)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (31, 1, 1016, CAST(N'2019-01-29T14:03:08.0820000' AS DateTime2), 0, 0)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (32, 1, 1016, CAST(N'2019-01-29T14:04:03.0970000' AS DateTime2), 0, 0)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (33, 1, 1016, CAST(N'2019-01-29T14:04:37.6020000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (34, 1, 1016, CAST(N'2019-01-29T14:10:02.5110000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (35, 2, 1017, CAST(N'2019-01-29T14:12:12.8560000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (36, 2, 1016, CAST(N'2019-01-29T14:13:21.6830000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (37, 2, 1016, CAST(N'2019-01-29T14:14:30.9230000' AS DateTime2), 0, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (38, 2, 1016, CAST(N'2019-01-29T14:15:05.4100000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (45, 2, 1017, CAST(N'2019-01-29T14:16:30.9060000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (47, 2, 1017, CAST(N'2019-01-29T14:19:41.5020000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (48, 2, 1016, CAST(N'2019-01-29T14:20:11.0870000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (51, 2, 1016, CAST(N'2019-01-29T14:22:58.2680000' AS DateTime2), 2, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (55, 2, 1016, CAST(N'2019-01-29T14:29:31.7290000' AS DateTime2), 1, 1)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (56, 2, 1017, CAST(N'2019-01-29T14:29:26.0470000' AS DateTime2), 0, 0)
GO
INSERT [dbo].[Orders] ([Id], [userId], [ProductId], [OrderDate], [Amount], [IsOrdered]) VALUES (57, 2, 1016, CAST(N'2019-01-29T14:29:42.0320000' AS DateTime2), 0, 0)
GO
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([Id], [UserName], [PasswordHash], [PasswordSalt]) VALUES (1, N'selma', 0x1259E17B302806DB3C223CDABCC559BE31BB64353297B8560290D08302ED58C571AEDF62DFC598529659330C86DA6E2A5203BEF2A504812647F748EE75C0B3B6, 0xF3E7F1C3D0185C3D42E55A6F10B690C509F3E04365A706B97CDED6367EE50DF0F1402ECDFD77C9451221CE6B51E39D46D04687128ECAFE63B7848A3C1772965051B66A2A740683DF5A49CC4732A7434DC614F15AF9A8FE9C7FA06F6948851960A456633C96A67D00DB77171E3080F1F657FA63B80810AC66676C8D6FF789FEC3)
GO
INSERT [dbo].[Users] ([Id], [UserName], [PasswordHash], [PasswordSalt]) VALUES (2, N'petar', 0xE35FB571EBBBA4C7F70962F24FC3B885997EB37D7EEFA850516C3CD8C8FE5BB02C4338949788E6A5027D396B10387EB4508BDA63DDA74B6B58B08FAAB97955DF, 0xD05F1533C0AC08592CF65CFFAD973521A31D773393EE0EDD233C3E0D1A0B7733C6CA8494EBDCE736D1F6B46B15AFE4D62CF085E060EB251BEFC91A23AFE67C9FA330AA42652934F66FD34DC25206A046222975978444DE1DF8460F6A96E92DF880A960A25BD3239B747193B3B4D7DE34E86422AA53556DF0F260852A4E215583)
GO
INSERT [dbo].[Users] ([Id], [UserName], [PasswordHash], [PasswordSalt]) VALUES (3, N'tijana', 0x9075D3D935A1DFAE95E39B307F12A0695E864494859F13C526811FC2E619FFF00C29AD570236EEF44D525DF5B1AE9E824B837FC49C6A906E83CE7422A4655CDF, 0x2471C977D962DF7AD880E0775BA676656A0DF5195CC9C9147CC89C7F8032D0AFDBBA97444815FD9D8BEF9263DE8A8BD590CC456E5379F8646E5145FDD2EF2B98E67AFB1D7389AF0CFD48222F4BC45F334438A803035BA7A067845DE355A8B12810DBE3786634F6EED4F3E32FD9B2ABC7CE15A51ECCFE25A2EB2E78597D7E975D)

GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO

            ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM [dbo].[Categories]");
            migrationBuilder.Sql("DELETE FROM [dbo].[Products]");
            migrationBuilder.Sql("DELETE FROM [dbo].[Orders]");
            migrationBuilder.Sql("DELETE FROM [dbo].[Users]");
        }
    }
}
