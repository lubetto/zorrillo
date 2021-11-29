package zorrillo.catalogo.controller;

import zorrillo.catalogo.model.User;
import zorrillo.catalogo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 *
 * @author LUIS GERMAN ORTEGA M.
 */
@RestController
@RequestMapping("api/user")
@CrossOrigin("*")
public class UserController {
    /**
     * Inyectar Dependencias
     */
    @Autowired
    private UserService userService;
    /**
     * Consulta todos los Registros
     */
    @GetMapping("/all")
    public List<User> getAll() {
        return userService.getAll();
    }
    /**
     * Crear Nuevo Registro
     */
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User registrar(@RequestBody User user) {
        return userService.registrar(user);
    }
    /**
     * Consulta por Email y password
     */
    @GetMapping("/{email}/{password}")
    public User autenticarUsuario(@PathVariable("email") String email, @PathVariable("password") String password) {
        return userService.autenticarUsuario(email, password);
    }
    /**
     * Consulta por Email
     */
    @GetMapping("/{email}")
    public boolean existeEmail(@PathVariable("email") String email) {
        return userService.existeEmail(email);
    }
}

