const { Product, User } = require("../models/index");
const { createToken, verifyToken } = require("../helpers/jwt");
const { comparedPassword } = require("../helpers/bcrypt");

class Controller {
  static async register(req, res, next) {
    const { name, email, password, gender } = req.body;
    // console.log(req.body);
    console.log("dari controller user");
    try {
      const createdUser = await User.create({
        name,
        email,
        password,
        gender,
      });
      res.status(201).json({
        id: createdUser.id,
        email: createdUser.email,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    console.log(process.env.SECRET, "<<<<<<<");
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "bad_request_login" };
      }
      const foundUser = await User.findOne({
        where: {
          email,
        },
      });
      if (!foundUser) {
        throw { name: "invalid_credentials" };
      }
      const comparePassword = comparedPassword(password, foundUser.password);

      if (!comparePassword) {
        throw { name: "invalid_credentials" };
      }

      const payload = {
        id: foundUser.id,
      };

      const token = createToken(payload);

      res.status(200).json({
        access_token: token,
        name: foundUser.name,
        email: foundUser.email,
        gender: foundUser.gender,
        username: foundUser.username,
        id: foundUser.id,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async findUser(req, res, next) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        attributes: { exclude: ["password"] },
      });

      if (!user) throw { name: "DATA_NOT_FOUND", id, data: "user" };

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async findAllProduct(req, res, next) {
    try {
      let data = await Product.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async findOneProduct(req, res, next) {
    const { id } = req.params;
    try {
      let data = await Product.findByPk(id);

      if (!data) throw { name: "DATA_NOT_FOUND", id, data: "Product" };

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async addProduct(req, res, next) {
    try {
      const { name, imgUrl } = req.body;
      let data = await Product.create({
        name,
        imgUrl,
      });

      res.status(201).json(data);
    } catch (error) {
      console.log(error.name);
      next(error);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, imgUrl } = req.body;
      let foundData = await Product.findByPk(id);

      if (!foundData) throw { name: "DATA_NOT_FOUND", id, data: "Product" };

      let data = await Product.update(
        {
          name,
          imgUrl,
        },
        { where: { id } }
      );

      res.status(201).json({ message: `data with id ${foundData.id} is updated!` });
    } catch (error) {
      console.log(error.name);
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const id = req.params.id;
      let data = await Product.findByPk(id);
      let result = await Product.destroy({
        where: {
          id,
        },
      });
      if (!result) {
        throw { name: "DATA_NOT_FOUND", id, data: "Product" };
      }
      res.status(200).json(`Success delete product: ${data.name}`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
